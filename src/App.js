import React, { useMemo } from 'react';
import './App.css';
import './styles.css';
import BarChart from './components/BarChart';
import TableChart from './components/TableChart';
import Dropdown from './components/Dropdown';
import Widget from './components/Widget';
import useLoans from './hooks/useLoans';

const App = () => {
  const { loans, loading, error, filters, setFilters, resetFilters, updatedLoans, aggregatedData, columns } = useLoans();

  const handleFilterChange = (filterName) => (value) => {
    setFilters(prev => ({ ...prev, [filterName]: value }));
  };

  const uniqueOptions = useMemo(() => {
    const extractUniqueValues = (propertyName) => {
      return [...new Set(loans.map(item => item[propertyName].toString()))];
    };
    return {
      years: extractUniqueValues('year'),
      quarters: extractUniqueValues('quarter'),
      homeOwners: extractUniqueValues('homeOwnership'),
      terms: extractUniqueValues('term')
    };
  }, [loans]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="App">
      <header>
        <h1>Loans by Grade</h1>
      </header>

      <main>
        <section className="center-content">
          <div className="widgets-container">
            <Widget title="Bar Graph" >
              <BarChart data={updatedLoans} />
            </Widget>
            <Widget title="Table Chart" >
              <TableChart columns={columns} data={aggregatedData} />
            </Widget>
          </div>
        </section>

        <section>
          <Dropdown
            options={uniqueOptions.years}
            value={filters.year}
            onChange={handleFilterChange('year')}
            placeholder="Select Year"
          />
          <Dropdown
            options={uniqueOptions.quarters}
            value={filters.quarter}
            onChange={handleFilterChange('quarter')}
            placeholder="Select Quarter"
          />
          <Dropdown
            options={uniqueOptions.homeOwners}
            value={filters.homeOwner}
            onChange={handleFilterChange('homeOwner')}
            placeholder="Select Home Owner"
          />
          <Dropdown
            options={uniqueOptions.terms}
            value={filters.term}
            onChange={handleFilterChange('term')}
            placeholder="Select Term"
          />
          <button onClick={resetFilters}>Reset Filters</button></section>
      </main>
    </div>
  );
};

export default App;
