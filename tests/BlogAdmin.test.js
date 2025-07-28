import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BlogAdmin from '../BlogAdmin';

describe('BlogAdmin Component', () => {
  beforeEach(() => {

    global.localStorage.setItem(
      'posts',
      JSON.stringify([
        {
          id: 1,
          title: 'Test Post',
          content: 'This is a test post.',
          author: 'Admin',
          date: '2024-06-01',
          tags: ['Test'],
        },
      ])
    );
  });

  afterEach(() => {
    global.localStorage.clear();
  });

  // TC-01:Adding a New Blog Post
  test('should add a new blog post', () => {
    render(<BlogAdmin />);

    fireEvent.click(screen.getByText('New Post'));
    fireEvent.change(screen.getByPlaceholderText('Title'), {
      target: { value: 'New Blog Post' },
    });
    fireEvent.change(screen.getByPlaceholderText('Content'), {
      target: { value: 'This is a new blog post.' },
    });
    fireEvent.click(screen.getByText('Create Post'));

    expect(screen.getByText('New Blog Post')).toBeInTheDocument();
    expect(screen.getByText('This is a new blog post.')).toBeInTheDocument();
  });

  // TC-02:Editing an Existing Blog Post
  test('should edit an existing blog post', () => {
    render(<BlogAdmin />);

    fireEvent.click(screen.getByText('Edit'));
    fireEvent.change(screen.getByPlaceholderText('Title'), {
      target: { value: 'Updated Blog Post' },
    });
    fireEvent.click(screen.getByText('Update Post'));

    expect(screen.getByText('Updated Blog Post')).toBeInTheDocument();
  });

  // TC-03:Deleting a Blog Post
  test('should delete a blog post', () => {
    render(<BlogAdmin />);

    fireEvent.click(screen.getByText('Delete'));
    expect(screen.queryByText('Test Post')).not.toBeInTheDocument();
  });

  // TC-04:Adding a Comment to a Blog Post
  test('should add a comment to a blog post', () => {
    render(<BlogAdmin />);

    fireEvent.change(screen.getByPlaceholderText('Add a comment'), {
      target: { value: 'This is a test comment.' },
    });
    fireEvent.click(screen.getByText('Add Comment'));

    expect(screen.getByText('This is a test comment.')).toBeInTheDocument();
  });

  // TC-05:Deleting a Comment
  test('should delete a comment', () => {
    render(<BlogAdmin />);

    fireEvent.change(screen.getByPlaceholderText('Add a comment'), {
      target: { value: 'This is a test comment.' },
    });
    fireEvent.click(screen.getByText('Add Comment'));
    fireEvent.click(screen.getByText('Delete Comment'));

    expect(screen.queryByText('This is a test comment.')).not.toBeInTheDocument();
  });

  // TC-06:Marking a Comment as Inappropriate
  test('should mark a comment as inappropriate', () => {
    render(<BlogAdmin />);

    fireEvent.change(screen.getByPlaceholderText('Add a comment'), {
      target: { value: 'This is a test comment.' },
    });
    fireEvent.click(screen.getByText('Add Comment'));
    fireEvent.click(screen.getByText('Mark as Inappropriate'));

    expect(screen.getByText('This is a test comment.')).toHaveClass('inappropriate');
  });
});