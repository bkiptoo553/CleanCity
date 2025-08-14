# CleanCity: Waste Pickup Scheduler – Final Test Report

## 1. Executive Summary

This report summarizes the QA testing activities for the CleanCity Waste Pickup Scheduler web application. Testing focused on functional, UI/UX, and accessibility aspects, using both manual and automated (Jest) approaches. Multiple defects were identified, documented, and prioritized for remediation.

---

## 2. Test Approach

- **Manual Testing:** Exploratory and scenario-based, covering all user flows.
- **Automated Testing:** Jest with React Testing Library for BlogAdmin and related components.
- **Test Data:** See `tests/test-cases.md` and `tests/test-plan.md` for scenarios and data.
- **Tools:** Chrome, Browser DevTools, GitHub Actions CI, Jira/GitHub Issues for defect tracking.

---

## 3. Test Execution Summary

- **Total Test Cases Executed:** 12 (see `tests/test-cases.md`)
- **Automated Test Pass Rate:** 75%
- **Manual Test Pass Rate:** 80%
- **Critical Bugs Found:** 2
- **Medium Bugs Found:** 3
- **Minor/Cosmetic Bugs Found:** 4

---

## 4. Complete Defect/Issue Log

| ID | Title/Description | Severity | Status | Steps to Reproduce | Expected | Actual | Fix/Recommendation |
|----|-------------------|----------|--------|--------------------|----------|--------|--------------------|
| 1  | Multiple "Delete" Buttons Found (Ambiguity in Selector) | Medium | Open | 1. Add multiple blog posts<br>2. Try to delete one using test | Only targeted post deleted | Test fails due to ambiguous selector | Use `getAllByText` or `aria-label` for specificity |
| 2  | Missing "Add a comment" Field | High | Open | 1. Open blog post<br>2. Try to add comment | Input field present | No input field found | Add `<input placeholder="Add a comment" />` |
| 3  | Redundant or Nested Blog Forms | Medium | Open | 1. Inspect DOM<br>2. Observe nested forms | Forms not nested | Nested forms found | Refactor to separate forms |
| 4  | Duplicate Input Fields (e.g., Title, Tags) | Low | Open | 1. Open Add/Edit forms<br>2. Inspect placeholders | Unique placeholders | Duplicate placeholders | Use unique `aria-label` or `data-testid` |
| 5  | Featured posts not hidden on search | Medium | Open | 1. Search for post<br>2. Observe featured section | Featured section hidden | Featured section remains | Hide featured section during search |
| 6  | Comments on specific posts don't appear in dashboard | High | Open | 1. Add comment<br>2. Check dashboard | Comment visible | Comment missing | Ensure comments are displayed in dashboard |
| 7  | Empty Profile details allowed | Medium | Open | 1. Edit profile<br>2. Remove all details | Profile requires info | Profile can be empty | Prevent empty profile submission |
| 8  | Error message not shown for invalid form input | Minor | Open | 1. Submit invalid form | Error shown | No error shown | Add validation and error display |
| 9  | Accessibility: No alt-text on images | Minor | Open | 1. Use screen reader on Awareness page | Alt-text read | No alt-text | Add descriptive alt attributes |
| 10 | Accessibility: Nested forms confuse screen readers | Minor | Open | 1. Use screen reader on BlogAdmin | Forms read clearly | Confusing structure | Refactor to avoid nested forms |

---

## 5. Recommendations

- Address all high and medium severity defects before release.
- Improve test selectors for automation reliability.
- Enhance accessibility by adding alt-text and improving form structure.
- Add more robust form validation and error handling.
- Continue using CI for automated regression testing.

---

## 6. Attachments

- [Test Cases & Checklists](./test-cases.md)
- [Test Plan](./test-plan.md)
- [Defect Log](./defectLog.md)
- [JUnit XML Results](./testResults/junit.xml)

---

**Prepared by:** Brian Kiptoo  
**Date:** 2025-07-28  
**Role:** Tester