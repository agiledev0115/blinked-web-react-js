export const filterAgents = (agents, search, filter) => {
    const value = search.trim().toLowerCase();

    if (search === '' && filter === 'All') return agents;
    if (search !== '' && filter === 'All') {
        return agents.filter(row => (
            (row.agentName && row.agentName.toLowerCase().includes(value)) ||
            (row.location && row.location.toLowerCase().includes(value)) ||
            (row.revenue && row.revenue.toLowerCase().includes(value)) ||
            (row.orders && row.orders.toString().toLowerCase().includes(value))
        ));
    };
    if (search === '' && filter !== 'All') {
        return agents.filter(row => row.status.toLowerCase() === filter.toLowerCase());
    };
    if (search !== '' && filter !== 'All') {
        return agents.filter(row => (
            ((row.agentName && row.agentName.toLowerCase().includes(value)) ||
                (row.location && row.location.toLowerCase().includes(value)) ||
                (row.revenue && row.revenue.toLowerCase().includes(value)) ||
                (row.orders && row.orders.toString().toLowerCase().includes(value))) &&
            row.status.toLowerCase() === filter.toLowerCase()
        ));
    };
};