# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



## I. **Project Structure**

```plaintext
.
pro-chauffeurs/
├── pro-chauffeurs-frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── About.jsx
│   │   │   ├── ClientRating.jsx
│   │   │   ├── DriverCard.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── Reasons.jsx
│   │   │   └── Services.jsx
│   │   ├── hooks/
│   │   │   └── driverFetch.js
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── BookRide.jsx
│   │   │   ├── DriverList.jsx
│   │   │   └── HirerDetails.jsx
│   │   ├── redux/
│   │   │   ├── slices/
│   │   │   │   ├── bookRideSlice.js
│   │   │   │   ├── driverListSlice.js
│   │   │   │   └── hirerDetailsSlice.js
│   │   │   └── store.js
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── bootstrap.min.css
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .gitignore
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── README.md
│   └── vite.config.js
├── pro-chauffeurs-backend/

```


## II. **General Guidelines**

1. **Frequent Commits and Pulls:**
   - Commit changes frequently and pull updates regularly to avoid conflicts.

2. **Clear Commit Messages:**
   - Write clear, descriptive commit messages that explain the purpose of the change.

3. **Regular Merges:**
   - Merge feature branches into `develop` or `main` frequently to avoid long-lived branches.

4. **Handle Merge Conflicts Carefully:**
   - Resolve conflicts carefully to ensure that code is not unintentionally broken.

5. **Backup and Security:**
   - Ensure sensitive information (like API keys) is not committed to the repository. Use environment variables or secrets management tools.

6. **Branch Protection Rules:**
   - Configure branch protection rules in GitHub to require reviews before merging and enforce status checks.


## III. **Guidelines for Pull Requests**

1. **Clear and Descriptive Titles:**
   - Use a descriptive title that summarizes the purpose of the PR.

2. **Detailed Description:**
   - Provide a thorough description of what changes were made, why they were made, and how to test them.

3. **Keep Pull Requests Small:**
   - Make pull requests small and focused on a single task or feature. This makes them easier to review and less likely to introduce conflicts.

4. **Add Context and References:**
   - Link to relevant issues or tasks that the Pull Request addresses. This helps reviewers understand the context and importance of the changes.

5. **Request Reviews Early:**
   - Request reviews as soon as possible to get feedback early and avoid delays in the development process.

6. **Address Feedback Promptly:**
   - Act on feedback quickly and update the Pull Request accordingly. Communicate any challenges or questions you have during the review process.

7. **Test Thoroughly:**
   - Ensure that changes are thoroughly tested before submitting the Pull Request. Include automated tests if possible.

8. **Follow Contribution Guidelines:**
   - Adhere to the project’s contribution guidelines and coding standards. Check for any specific Pull Request guidelines outlined in the repository.

9. **Use Branch Protection Rules:**
   - Configure branch protection rules to enforce required reviews, status checks, and other quality controls before merging.

10. **Close or Archive Old Pull Requests:**
    - Close or archive pull requests that are no longer relevant or have become stale.


## IV. **Workflow to get the latest updates from the "main" branch into your working branch "branch1"**
   - Before making any changes in the project, create/select your working branch. Then pull the latest updates from "main" branch into it.

1. **Switch to "branch1"**
```sh
git checkout branch1
```
2. **Pull the Latest Changes from "main" into "branch1"**
```sh
git pull origin main
```
3. **Resolve Any Conflicts:**
   - If there are conflicts between your changes in "branch1" and the updates from "main", Git will highlight them. You need to manually resolve these conflicts. Open these files in your code editor to resolve the conflicts. The conflict markers will look like this:
```diff
<<<<<<< HEAD
Your changes in branch1
=======
Changes from the main branch
>>>>>>> main
```
   - Edit the file to resolve the conflicts, deciding which changes to keep or how to combine them.
   - Remove the conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`).

4. **Commit the Merged Changes**
```sh
git add .
git commit -m "Merged updates from main into branch1"
```
5. **Push the Updated "branch1" to the Remote Repository**
```sh 
git push origin branch1
```


## V. **Workflow for Pull Request**

1. **Branch Creation:**
   - Create a feature branch and work on it.
```sh
git branch branch1
```  
2. **Select your branch**
```sh
git checkout branch1
```
3. **Edit Code in your Local Repository**
4. **Commit the Changes**
```sh
git add .
git commit -m "Commit message describing changes"
```
5. **Pull updates from "main" (from Remote Repository)**
   - "main" branch contains only the approved code. This will be aded to you working branch (branch1).
```sh
git pull origin main
```
6. **Resolve Any Conflicts:**
   - If there are conflicts between your changes in "branch1" (Local Repository) and the updates from "main" (Remote Repository), Git will highlight them. You need to manually resolve these conflicts. Open these files in your code editor to resolve the conflicts. The conflict markers will look like this:
```diff
<<<<<<< HEAD
Your changes in branch1
=======
Changes from the main branch
>>>>>>> main
```
   - Edit the file to resolve the conflicts, deciding which changes to keep or how to combine them.
   - Remove the conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`).
7. **Commit the Merged Changes**
```sh
git add .
git commit -m "Commit message describing changes"
```
8. **Push Changes:**
   - Push changes to "branch1" (to Remote Repository).
```sh
git push origin branch1
```
9. **Open Pull Request:** Open a pull request against the target (develop) branch. The "develop" branch is created to check code before adding to "main" branch.
   - Go to the [project's repository](https://github.com/Ajith369369/pro-chauffeurs-frontend).
   - Click on "Pull Requests".
   - Click on "New Pull Request".
   - Select "base" as "develop" branch and "compare" as "branch1" branch (your working branch).
   - Add Title and Description.
   - Click on "Create Pull Request"
10. **Review:** Team members review the Pull Request, provide feedback, and suggest changes.
11. **Update:** Make changes based on feedback and push updates to the branch (branch1).
12. **Approval:** Once approved, merge the Pull Request into the target (develop) branch.
13. **Close Pull Request:** Close the Pull Request and delete the feature branch (branch1) if no longer needed.


## VI. **Workflow for the Group Project**

1. Each **team member** creates a feature branch:
   ```sh
   git checkout -b feature-username-task
   ```
2. **Team members** make changes, commit, and push their branches:
   ```sh
   git add .
   git commit -m "Description of changes"
   git push origin feature-username-task
   ```
3. **Create a Pull Request** on GitHub and assign reviewers.
4. **Reviewers** review the Pull Request, suggest changes or approve it.
5. **Resolve conflicts** if any, and **merge the Pull Request** into `develop` branch.
6. **Finally merge** `develop` branch into `main` branch.