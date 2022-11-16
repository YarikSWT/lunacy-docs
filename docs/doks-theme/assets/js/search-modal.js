---
---
jQuery(function () {
  $.modal.defaults.showClose = false;

  const search = instantsearch({
    indexName: "{{ site.algolia.index_name }}",
    searchClient: algoliasearch(
      "{{ site.algolia.application_id }}",
      "{{ site.algolia.search_only_api_key }}"
    ),
  });

  const hitTemplate = function (hit) {
    let url = `{{ site.baseurl }}${hit.url}#${hit.anchor}`;

    const title = hit._highlightResult.title.value;

    let breadcrumbs = "";
    if (hit._highlightResult.headings) {
      breadcrumbs = hit._highlightResult.headings
        .map((match) => {
          return `<span class="post-breadcrumb">${match.value}</span>`;
        })
        .join(" > ");
    }

    const content = hit._highlightResult.content.value;

    return `
      <li class="search-result">
        <a href="${url}"
          <div class="search-result-content">
              <h3 class="search-result-header">
                ${title}
              </h3>
              <p class="post-breadcrumbs">${breadcrumbs}</p>
              <div class="search-result-description">${content}</div>
          </div>
        </a>
      </li>
    `;
  };

  const { connectHits, connectSearchBox } = instantsearch.connectors;
  const { poweredBy } = instantsearch.widgets;

  const renderHits = (renderOptions, isFirstRender) => {
    const { hits, widgetParams, results } = renderOptions;

    if (isFirstRender || !results.query) {
      return;
    }

    widgetParams.container.innerHTML = `
    <hr class="divider">
      <ul class="search-results__list unstyled" id="search-results-list">
        ${hits
          .map((item) => {
            return hitTemplate(item);
          })
          .join("")}
      </ul>
    `;
  };

  const renderSearchBox = (renderOptions, isFirstRender) => {
    const { query, refine, clear, isSearchStalled, widgetParams } =
      renderOptions;

    if (isFirstRender) {
      const input = document.createElement("input");

      const loadingIndicator = document.createElement("span");
      loadingIndicator.textContent = "Loading...";

      const button = document.createElement("button");
      button.innerHTML =
        '<img src="/doks-theme/assets/images/layout/close.svg" />';
      button.setAttribute("id", "search-input-clear");
      button.setAttribute("style", "display: none;");

      input.addEventListener("input", (event) => {
        refine(event.target.value);
        $("#search-input-clear").show();
      });

      input.setAttribute("id", "search-modal-input");
      input.setAttribute("class", "search-input");

      button.addEventListener("click", () => {
        clear();
        $("#search-input-clear").hide();
        $("#search-results-list").html("");
      });

      widgetParams.container.appendChild(input);
      widgetParams.container.appendChild(loadingIndicator);
      widgetParams.container.appendChild(button);
      input.focus();
    }

    widgetParams.container.querySelector("input").value = query;
    widgetParams.container.querySelector("span").hidden = !isSearchStalled;
  };

  // Create the custom widget
  const customHits = connectHits(renderHits);
  const customSearchBox = connectSearchBox(renderSearchBox);

  search.addWidgets([
    customSearchBox({
      container: document.querySelector("#search-bar"),
      autofocus: true,
    }),
    customHits({
      container: document.querySelector("#search-results"),
    }),
    poweredBy({
      container: document.querySelector("#powered-by"),
    }),
  ]);

  $("#site_search").click(function (event) {
    event.preventDefault();
    this.blur(); // Manually remove focus from clicked link.
    $("#search-modal").modal();
    try {
      search.start();
    } catch (error) {
      search.refresh();
      $("#search-modal-input").focus();
    }
  });

  $("#search-modal").on($.modal.BEFORE_CLOSE, () => {
    $("#search-results-list").html("");
  });
});
