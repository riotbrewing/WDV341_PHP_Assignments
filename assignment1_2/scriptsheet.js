let versionButton = document.getElementById("version-tab");
let addButton = document.getElementById("add-tab");
let commitButton = document.getElementById("commit-tab");
let pushButton = document.getElementById("push-tab");
let pullButton = document.getElementById("pull-tab");
let cloneButton = document.getElementById("clone-tab");

versionButton.addEventListener("click", function(){

    let header = document.getElementById("header");
    header.innerHTML = "VERSION CONTROL";
    let body = document.getElementById("body");
    body.innerHTML = "Version Control is a way to build a program and maintain the integrity of project. This is accomplished by\n" +
        " first making a save of the source code, then each contributor that adds to the source code creates a separate copy (or branch) of the code\n" +
        " with the changes able to be reviewed before it is added. This allows the source code to remain uncorrupted making it easier to find and fix\n" +
        " and issues as well as keeping the project as functional as possible during the development as well as after updates. For example if you released an\n" +
        " update to an app and some unknown issue comes up, you could revert the app to the last functional version with ease, and then you only\n" +
        " need to look at the code that added to find at what was causing the issue.";
})

addButton.addEventListener("click", function(){

    let header = document.getElementById("header");
    header.innerHTML = "ADD";
    let body = document.getElementById("body");
    body.innerHTML = "The add function of git moves the selected, or all of the, files you want to keep track of to a sort of staging area. The files in this\n " +
        " staging area will be the files tha get added to the repository after you make a commit. No changes are made to repository until you make a commit.";
})

commitButton.addEventListener("click", function(){

    let header = document.getElementById("header");
    header.innerHTML = "COMMIT"
    let body = document.getElementById("body");
    body.innerHTML = "The commit function is the act of adding new code to the project for review. When you commit you must include a message, the message\n" +
        " should indicate what the added code is intended to do. After you perform the commit all of the files you are adding will be sent to the repo, and\n" +
        " all of the changes made to the repo will be highlighted for review before they are added and a new 'version' of the project is created.";
})

pushButton.addEventListener("click", function(){

    let header = document.getElementById("header");
    header.innerHTML = "PUSH";
    let body = document.getElementById("body");
    body.innerHTML = "The push function takes the state of your local repository and sends it a remote repository. This allows you and your whole team\n" +
    "  access to all the changes to program. By making frequent pushes (and pulls) the team will be working on the most recent version of the program";
})

pullButton.addEventListener("click", function(){

    let header = document.getElementById("header");
    header.innerHTML = "PULL";
    let body = document.getElementById("body");
    body.innerHTML = "The pull function takes the state of the remote repository and updates to local repository to the current state of the branch you\n." +
    " are working on as well as all of the remote branches being tracked. It is a good practice to to pull (and push) frequently to make sure you are working\n" +
    " on the most current version of the project.";
})

cloneButton.addEventListener("click", function(){

    let header = document.getElementById("header");
    header.innerHTML = "CLONE";
    let body = document.getElementById("body");
    body.innerHTML = "The clone function makes a copy of a repository (or a branch). When you make a clone you are making a copy of all of the files and commits\n" +
    "  associated with the repo/branch being cloned. This makes it easy to jump on a project that you did not start, you can make a clone of the current repository\n" +
    " and you will be starting off with the most up to date version on the project.";
})