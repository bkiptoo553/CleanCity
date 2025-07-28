
# Test Cases and Checklists for BlogAdmin Component

## Test Cases

### TC-01: Add a New Blog Post
**Description**: Verify that a new blog post can be added successfully.
- **Steps**:
  1. Click the "New Post" button.
  2. Fill in the title, content, and tags fields.
  3. Click the "Create Post" button.
- **Expected Result**: The new post appears in the list of blog posts with the correct details.

---

### TC-02: Edit an Existing Blog Post
**Description**: Verify that an existing blog post can be edited.
- **Steps**:
  1. Click the "Edit" button on a blog post.
  2. Modify the title, content, or tags fields.
  3. Click the "Update Post" button.
- **Expected Result**: The post is updated with the new details.

---

### TC-03: Delete a Blog Post
**Description**: Verify that a blog post can be deleted.
- **Steps**:
  1. Click the "Delete" button on a blog post.
  2. Confirm the deletion in the popup.
- **Expected Result**: The post is removed from the list, and associated comments are deleted.

---

### TC-04: Add a Comment to a Blog Post
**Description**: Verify that a comment can be added to a blog post.
- **Steps**:
  1. Navigate to a blog post.
  2. Enter a comment in the comment field.
  3. Click the "Add Comment" button.
- **Expected Result**: The comment appears under the blog post.

---

### TC-05: Delete a Comment
**Description**: Verify that a comment can be deleted.
- **Steps**:
  1. Click the "Delete" button on a comment.
  2. Confirm the deletion in the popup.
- **Expected Result**: The comment is removed from the list.

---

### TC-06: Mark a Comment as Inappropriate
**Description**: Verify that a comment can be marked as inappropriate.
- **Steps**:
  1. Click the "Mark as Inappropriate" button on a comment.
- **Expected Result**: The comment is flagged as inappropriate.

---

## Checklists

### Blog Post Management
- [ ] Can add a new blog post.
- [ ] Can edit an existing blog post.
- [ ] Can delete a blog post.
- [ ] Blog post list updates correctly after changes.

### Comment Management
- [ ] Can add a comment to a blog post.
- [ ] Can delete a comment.
- [ ] Can mark a comment as inappropriate.
- [ ] Comments are associated with the correct blog post.

### Data Persistence
- [ ] Blog posts are saved to `localStorage`.
- [ ] Comments are saved to `localStorage`.
- [ ] Data persists across page reloads.

### UI/UX
- [ ] Form validation works (e.g., required fields).
- [ ] Buttons and inputs are accessible and labeled correctly.
- [ ] Responsive design works on different screen sizes.

### Error Handling
- [ ] Displays an error message for invalid form inputs.
- [ ] Handles missing or corrupted `localStorage` data gracefully.
=======
**Student:** Brian kiptoo
**Cohort:** february 2025
**Role:** Tester
