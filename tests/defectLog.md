
---

#  Defect Log – CleanCity Blog admin panel

## Overview

This document outlines the currently identified defects in the `BlogAdmin` component and other aspects of the app, primarily uncovered through failed automated tests using React Testing Library and manual testing.

---

###  Defect 1: Multiple "Delete" Buttons Found (Ambiguity in Selector)

* **Test Case**: `should delete a blog post`
* **File**: `tests/BlogAdmin.test.js:61`
* **Error**:

  ```
  TestingLibraryElementError: Found multiple elements with the text: Delete
  ```
* **Cause**: The test uses `getByText('Delete')`, which is ambiguous because multiple blog posts contain a Delete button.
* **Fix**:
  Use `getAllByText('Delete')` or query using `aria-label` like:

  ```js
  screen.getByLabelText('Delete post 5 Ways to Reduce Household Waste')
  ```

---

###  Defect 2: Missing "Add a comment" Field

* **Test Cases**:

  * `should add a comment to a blog post` (`BlogAdmin.test.js:69`)
  * `should delete a comment` (`BlogAdmin.test.js:81`)
  * `should mark a comment as inappropriate` (`BlogAdmin.test.js:94`)
* **Error**:

  ```
  TestingLibraryElementError: Unable to find an element with the placeholder text of: Add a comment
  ```
* **Cause**: The DOM does not contain any input field or textarea with placeholder="Add a comment".
* **Fix**:

  * Add a comment input field:

    ```html
    <input placeholder="Add a comment" type="text" />
    ```
  * Or, if using a `<textarea>`, ensure it includes the placeholder:

    ```html
    <textarea placeholder="Add a comment"></textarea>
    ```

---

###  Defect 3: Redundant or Nested Blog Forms

* **Observation**: There are nested forms with the same class `blog-admin-form`, which can be problematic and non-semantic.
* **Impact**:

  * May cause unexpected form submissions.
  * Could confuse screen readers or automation tools.
* **Fix**:

  * Ensure each form is distinct and not nested within another form.
  * Consider restructuring to have separate `Add Post` and `Edit Post` forms outside each other.

---

###  Defect 4: Duplicate Input Fields

* **Observation**: The same input field placeholders (`Title`, `Tags`) appear multiple times in the DOM, both in `Add` and `Edit` forms.
* **Impact**:

  * Tests may fail if querying by placeholder returns multiple elements.
* **Fix**:

  * Differentiate the forms using `aria-label`, or assign `id`s or `data-testid` attributes to input fields.

---

### Recommendation: Enhance Test Selectors

* Use more robust queries:

  ```js
  screen.getByLabelText('Add Blog Post')
  screen.getByRole('button', { name: /create post/i })
  screen.getByPlaceholderText('Add a comment')
  ```

* Consider assigning `data-testid` attributes for easier, unambiguous selection in tests.

---

## 🔧 Summary of Fixes Needed

| Defect ID | Severity | Fix Summary                                          |
| --------- | -------- | ---------------------------------------------------- |
| 1         | Medium   | Use more specific selector for Delete buttons        |
| 2         | High     | Add missing "Add a comment" input field              |
| 3         | Medium   | Remove or refactor nested forms                      |
| 4         | Low      | Avoid duplicate placeholders; use unique identifiers |

---

**Date Logged**: 2025-07-28
**Logged By**: Brian Kiptoo

---
# Defect log - Clean City blog UI/UX
### Defect 1:featured posts hiding
* **Observation**:
   * the featured section does not disapper when searching 
* **Impact**:
   * Users would struggle to go to their searched results
* **Fix**:
   * Ensure that the featured section is hidden when a search is occuring by modifying `Css files`
### Defect 2:Comments on specific posts don't appear
* **Observation**:
   * a comment made on a specific post does not appear on the dashboard on my comments section.
* **Impact**:
   * A comment does not appear it would discourage the users from commenting
* **Fix**:
   * allow comments buy users to be displayed.
### Defect 3:Empty Profile details
* **Observation**:
    * Users can remove all their details without providing them again
* **Impact**:
    * the profile sections remain empty.
* **Fix**:
    * prohibit empty profiles only change of profiles

# Security Vulnerabilities - Clean City app
https://github.com/bkiptoo553/CleanCity/security/code-scanning
