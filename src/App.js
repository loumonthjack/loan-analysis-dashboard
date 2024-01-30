import React, { useMemo } from 'react';
import './styles/App.css';
import BarGraph from './components/BarGraph';
import TableChart from './components/TableChart';
import Widget from './components/Widget';
import FilterDropdowns from './components/FilterDropdown';
import useLoans from './hooks/useLoans';

const App = () => {
  const { loans, loading, error, filters, setFilters, resetFilters, updatedLoans: sumOfLoans, aggregatedData: formattedSumOfLoans, columns } = useLoans();

  const handleFilterChange = (filterName) => (value) => {
    setFilters(prev => ({ ...prev, [filterName]: value }));
  };

  const uniqueDropdownOptions = useMemo(() => {
    const extractUniqueValues = (name) => {
      return [...new Set(loans.map(item => item[name].toString()).sort())]
    };
    return {
      homeOwner: extractUniqueValues('homeOwnership'),
      quarter: extractUniqueValues('quarter'),
      term: extractUniqueValues('term'),
      year: extractUniqueValues('year')
    };
  }, [loans]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const dataAvailable = sumOfLoans.length > 0;
  return (
    <div className="App">
      <header>
        <h1>Loans by Grade</h1>
      </header>

      <main>
        <section className="center-content">
          <div className="widgets-container">
            <Widget title="Bar Graph" >
              {dataAvailable ? <BarGraph data={sumOfLoans} /> : <p>No data to display</p>}
            </Widget>
            <Widget title="Table Chart" >
              {dataAvailable ? <TableChart columns={columns} data={formattedSumOfLoans} /> : <p>No data to display</p>}
            </Widget>
          </div>
        </section>

        <section className="filters-section">
          <div className="filters-container">
            <div className="filters-actions">
              <FilterDropdowns filters={filters} uniqueDropdownOptions={uniqueDropdownOptions} handleFilterChange={handleFilterChange} />
              <button onClick={resetFilters}>Reset Filters</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
