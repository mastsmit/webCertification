import { useMemo, useState } from 'react';
import { credentials, users } from './data.js';

const PAGE_SIZE = 4;

export function filterAndSortUsers(directory, search, selectedCredentials, sortOrder) {
  const query = search.trim().toLocaleLowerCase();

  return directory
    .filter((user) => user.name.toLocaleLowerCase().includes(query)
      && selectedCredentials.every((credential) => user.credentials.includes(credential)))
    .sort((a, b) => sortOrder === 'za'
      ? b.name.localeCompare(a.name)
      : a.name.localeCompare(b.name));
}

function App() {
  const [search, setSearch] = useState('');
  const [selectedCredentials, setSelectedCredentials] = useState([]);
  const [sortOrder, setSortOrder] = useState('az');
  const [page, setPage] = useState(1);

  const results = useMemo(
    () => filterAndSortUsers(users, search, selectedCredentials, sortOrder),
    [search, selectedCredentials, sortOrder],
  );
  const pageCount = Math.max(1, Math.ceil(results.length / PAGE_SIZE));
  const currentPage = Math.min(page, pageCount);
  const visibleUsers = results.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);
  const firstResult = results.length ? (currentPage - 1) * PAGE_SIZE + 1 : 0;
  const lastResult = Math.min(currentPage * PAGE_SIZE, results.length);
  const hasFilters = search.length > 0 || selectedCredentials.length > 0;

  function toggleCredential(credential) {
    setSelectedCredentials((current) => current.includes(credential)
      ? current.filter((item) => item !== credential)
      : [...current, credential]);
    setPage(1);
  }

  function clearFilters() {
    setSearch('');
    setSelectedCredentials([]);
    setPage(1);
  }

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="brand-mark" aria-hidden="true">C</div>
        <div>
          <p className="eyebrow">Cloud credentials</p>
          <h1>Credential Holder Directory</h1>
        </div>
      </header>

      <main className="layout">
        <aside className="filter-panel" aria-label="Directory filters">
          <div className="panel-heading">
            <h2>Find a member</h2>
            <button type="button" className="text-button" onClick={clearFilters} disabled={!hasFilters}>
              Clear filters
            </button>
          </div>

          <label className="field-label" htmlFor="name-search">Search by name</label>
          <input
            id="name-search"
            type="search"
            placeholder="Enter a name"
            value={search}
            onChange={(event) => { setSearch(event.target.value); setPage(1); }}
          />

          <fieldset className="credential-filters">
            <legend>Credentials</legend>
            <p className="filter-hint">Select one or more. Results must match all selected credentials.</p>
            {credentials.map((credential) => (
              <label className="check-row" key={credential}>
                <input
                  type="checkbox"
                  checked={selectedCredentials.includes(credential)}
                  onChange={() => toggleCredential(credential)}
                />
                <span>{credential}</span>
              </label>
            ))}
          </fieldset>
        </aside>

        <section className="results-panel" aria-label="Directory results">
          <div className="results-heading">
            <div>
              <p className="eyebrow">People</p>
              <h2>Members</h2>
              <p className="result-count" aria-live="polite">
                {results.length} {results.length === 1 ? 'member' : 'members'} found
              </p>
            </div>
            <label className="sort-control">
              <span>Sort by</span>
              <select value={sortOrder} onChange={(event) => { setSortOrder(event.target.value); setPage(1); }}>
                <option value="az">Name: A to Z</option>
                <option value="za">Name: Z to A</option>
              </select>
            </label>
          </div>

          {results.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon" aria-hidden="true">⌕</div>
              <h3>No matching members</h3>
              <p>Try another name or remove a credential filter.</p>
              {hasFilters && <button type="button" onClick={clearFilters}>Clear filters</button>}
            </div>
          ) : (
            <>
              <ul className="member-list" aria-label="Member results">
                {visibleUsers.map((user) => (
                  <li className="member-card" key={user.id}>
                    <div className="avatar" aria-hidden="true">
                      {user.name.split(' ').map((part) => part[0]).slice(0, 2).join('')}
                    </div>
                    <div className="member-details">
                      <h3>{user.name}</h3>
                      <p>{user.bio}</p>
                      <ul className="credential-list" aria-label={`${user.name}'s credentials`}>
                        {user.credentials.map((credential) => <li key={credential}>{credential}</li>)}
                      </ul>
                    </div>
                  </li>
                ))}
              </ul>
              <nav className="pagination" aria-label="Results pages">
                <span>Showing {firstResult}–{lastResult} of {results.length}</span>
                <div className="page-actions">
                  <button type="button" onClick={() => setPage(currentPage - 1)} disabled={currentPage === 1}>
                    Previous
                  </button>
                  <span>Page {currentPage} of {pageCount}</span>
                  <button type="button" onClick={() => setPage(currentPage + 1)} disabled={currentPage === pageCount}>
                    Next
                  </button>
                </div>
              </nav>
            </>
          )}
        </section>
      </main>
      <footer className="site-footer">Demo directory · Sample profiles</footer>
    </div>
  );
}

export default App;
