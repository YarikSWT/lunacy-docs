---
# Page settings
layout: default
keywords:
comments: false

# Hero section
title: Teams
description: Learn how to organize teamwork
icon: 'groups'

# Micro navigation
micro_nav: false

# Page navigation
page_nav:
    next:
        content: Tips and tricks
        url: '/tips'
    prev:
        content: Linked design
        url: '/linked_design'
---

Teams serve to make it easier for you to manage collaborative documents and people who have access to them. This chapter covers the details of working with teams.

<div class="callout callout--warning">
    <p><strong>Note:</strong> To start working with teams, make sure that you're signed into your Icons8 account.</p>
</div>

## Free plan vs paid plan

You can try out teams on a free plan. When you think you are ready, you can switch to our paid plan.

How it works with the **free plan**:

* You can create one team and invite two more members to the team.Thus, a free team can include up to 3 members. A user can be a member of one free team only.
* The total number of documents across all projects (including the ones in the trash bin) of a free team cannot exceed ten.
* Document version history is limited to 30 days.

 With the **paid plan**, you get:

* As many team members as you need
* Unlimited number of team documents
* Unlimited version history
* Unlimited storage period for deleted documents
* Free *Personal Cloud* license for the team owner

When you decide to switch to the **paid plan**, click over the team name in the left panel, then click **Upgrade plan** and follow the instructions.

![Upgrading a team plan in Lunacy](public/upgrading_team.png)

<div class="callout callout--warning">
    <p><strong>Note:</strong> If you are already a member of a free team (not owner) and want to create a team on a paid plan, you've got to leave the free team first.</p>
</div>

## Creating teams

![Creating a team](public/teams-add1.png)


To create a team:

1. Open the **Home** tab.
2. In the left panel, click **Create New Team**.
3. On the displayed screen, type the name of the team, then click **Create team**.
4. (optional) On the next screen, click **Copy link** to send it to other team members. You can always copy the invite link in the upper-right corner **Members** tab of the team page.  
5. Click **Continue**.

The user who created a team is a **team owner**.

By right-clicking a team name in the left panel of the **Home** tab you can invoke the context menu that lets you:

* Rename the team
* Change the team avatar
* Upgrade your plan
* [Delete the team](#deleting-a-team)

![Team context menu](public/teams_context_menu.png)


## Managing teams

To manage a team, switch to the **Home** tab, then click the required team name in the left panel. The team screen appears.

Each team screen features two tabs:

* [Projects](#projects)
* [Members](#members)

### [Projects](#projects)

On this tab, you will keep your team documents organized in projects. You can think of projects as of folders. To start creating team documents, you should have at least one project.

All the documents within team projects automatically become available to the team members.

To create a project:

1. Select the required team in the left menu of the **Home** tab. Make sure that the team screen opens on the **Projects** tab.
2. In the upper-right corner of the screen, click **New Project**.
3. Define the project name on the displayed screen.

![Creating a new project](public/new_project.png)


Now you can add documents to the project. You can:

* Create new cloud documents from scratch.
* Import existing .sketch files.
* Import existing documents from Figma.

For this, use the respective buttons that appear at the top of each project.

The figure below shows a view of a project with two documents.

![Team projects tab](public/project_screen_view.png)


To show/hide a project name in the left panel, use the **Pin** (![pin](public/pin_icon.png)) button in the upper-right corner.

<!--

![Pinning or unpinning a project](public/teams_pin_unpin.png)

-->

To rename a project, use the context menu in the left panel (1) or click over the project name in the main area (2). Also, you can change the project avatar (3).

![Renaming a project and changing project avatar](public/renaming-project.png)


To delete a document from a project:

1. Right-click over the document. The context menu shows up.
2. On the menu, click **Delete**.

Deleted documents move to the **Deleted** screen of the **Home** tab. There you can restore or permanently delete documents. 


To delete a project:
1. Delete all documents from the project first.
2. Click the **Delete project** button in the upper-right corner.
    
    **OR**

    Right-click over the project in the left panel, then click **Delete** on the context menu.

![Deleting a project](public/deleting_project.png)


<div class="callout callout--warning">
    <p><strong>Note:</strong> Not all users can delete documents and projects. For details, check out the table below.</p>
</div>


### [Members](#members)

On this tab, you can:

* Get links to invite new members (1).
* Manage team members and their roles (2).
* Delete team members (3).
* Copy a link for a pending invite to resend it (4).


![Team members tab](public/team_members3.png)

To get an invite link, click **Invite user** in the upper-right corner of the screen. The link gets copied to your clipboard, and a new record appears in the table of team members. Until the invitee opens opens the link, you'll see the *Invite pending* caption instead of the username.  Use the drop-down list in the **Team permissions** column, to assign the required user role:

* **Can view**. The set of permissions assigned by default to all users joining a team via an invite link. Users with this set of permissions can only view the content of team documents.
* **Can export**. This set of permissions is intended for developer handoff. Users with this set of permissions can view designs, inspect layer properties in the left panel, and export document content.
* **Can edit**. Users with this set of permissions can create and edit documents within the team. But they don't have some administrative permissions.
* **Admin**. Team administrators get the extended set of permissions.

Once a user opens the link, their username and avatar appear on the **Members** tab. You can view team members' profiles by right-clicking their avatars.

The table below shows the differences between the permission sets.


|         | Owner    | Admin | Can edit | Can view | Can export |
| ------------- |-------------|---------------|-------------|---------------| ---------------|
| Rename team |+ | + |   |  |  |
| Change team plan |+ |  |   |  |  |
| Change team avatar |+ | + |   |  |  |
| Assign roles to team members |+ | + |   |  |  |
| Delete team |+ |  |   |  |  |
| Delete members from team  |+ | + |   |  |  |
| Invite new members (copy links) |+ | + | +  |  |  |
| View list of team members |+ | + | + | + | + |
| View list of projects | + | + |  + | + | + |
| Create project |+ | + | +  |  |  |
| Rename project |+ | + | +  |  |  |
| Delete project |+ | + | +  |  |  |
| View list of documents | + | + |  + | + | + |
| Create document |+ | + | +  |  |  |
| Rename document |+ | + | +  |  |  |
| Delete document |+ | + | +  |  |  |
| Leave team |  | + |  + | + | + |



## [Deleting a team](#deleting-a-team)

To delete a team, right-click the team name on the left panel of the **Home** tab, then click **Delete** on the menu. Note that this operation is accessible only to the team owner.

Upon deletion:
* All the documents associated with the team move to **Home** > **Deleted**.
* Team members no longer have access to the documents.
* The name of the team appears dimmed in the left menu of the **Home** tab. A right-click over a deleted team invokes the context menu that lets you either permanently delete the team or restore it.


![Context menu over a deleted team](public/teams-delteam3.png)