import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchForm from '@/components/SearchForm';

describe('SearchForm', () => {
  it('renders correctly', () => {
    render(<SearchForm onSearch={() => {}} />);
    
    expect(screen.getByPlaceholderText('Search GitHub')).toBeInTheDocument();
    expect(screen.getByLabelText('Users')).toBeInTheDocument();
    expect(screen.getByLabelText('Organizations')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument();
  });

  it('calls onSearch with correct parameters when form is submitted', () => {
    const mockOnSearch = jest.fn();
    render(<SearchForm onSearch={mockOnSearch} />);
    
    const input = screen.getByPlaceholderText('Search GitHub');
    fireEvent.change(input, { target: { value: 'test' } });
    
    const orgRadio = screen.getByLabelText('Organizations');
    fireEvent.click(orgRadio);
    
    const submitButton = screen.getByRole('button', { name: 'Search' });
    fireEvent.click(submitButton);
    
    expect(mockOnSearch).toHaveBeenCalledWith('test', 'orgs');
  });

  it('initializes with provided initial values', () => {
    render(<SearchForm onSearch={() => {}} initialTerm="initial" initialType="orgs" />);
    
    expect(screen.getByPlaceholderText('Search GitHub')).toHaveValue('initial');
    expect(screen.getByLabelText('Organizations')).toBeChecked();
  });
});