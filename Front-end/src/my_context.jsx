import { createContext, useState, useContext } from 'react';

const JobContext = createContext({
  searchQuery: '',
  filters: {}, // Object to store filter key-value pairs
  jobListings: [],
  setSearchQuery: (query) => {},
  setFilters: (filters) => {},
  setJobListings: (listings) => {},
});

export const JobProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({}); // Initialize empty filters object
  const [jobListings, setJobListings] = useState([]);

  const updateSearchQuery = (query) => setSearchQuery(query);
  const updateFilters = (newFilters) => setFilters(newFilters);
  const updateJobListings = (listings) => setJobListings(listings);

  const value = {
    searchQuery,
    filters,
    jobListings,
    setSearchQuery: updateSearchQuery,
    setFilters: updateFilters,
    setJobListings: updateJobListings,
  };

  return (
    <JobContext.Provider value={value}>
      {children}
    </JobContext.Provider>
  );
};

export const useJobContext = () => useContext(JobContext);