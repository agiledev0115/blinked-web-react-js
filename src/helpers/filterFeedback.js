




export const filterFeedback = (feedback, search, filter) => {
    const value = search.trim().toLowerCase();

    if (search === '' && filter === 'All') return feedback;
    if (search !== '' && filter === 'All') {
        return feedback.filter(row => (
            (row.agentName && row.agentName.toLowerCase().includes(value)) ||
            (row.orderId && row.orderId.toLowerCase().includes(value)) ||
            (row.customerName && row.customerName.toLowerCase().includes(value)) ||
            (row.budget && row.budget.toLowerCase().includes(value))
        ));
    };
    if (search === '' && filter !== 'All') {
        return feedback.filter(row => row.status.toLowerCase() === filter.toLowerCase());
    };
    if (search !== '' && filter !== 'All') {
        return feedback.filter(row => (
            ((row.agentName && row.agentName.toLowerCase().includes(value)) ||
                (row.orderId && row.orderId.toLowerCase().includes(value)) ||
                (row.customerName && row.customerName.toLowerCase().includes(value)) ||
                (row.budget && row.budget.toLowerCase().includes(value))) &&
            row.status.toLowerCase() === filter.toLowerCase()
        ));
    };
};