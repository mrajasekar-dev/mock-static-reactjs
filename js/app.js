function SubAccordion({ title, content }) {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <div className={`rounded-md shadow-sm mt-4 ${isOpen ? '' : 'shadow'}`}>
            <div className={`p-4 ${isOpen ? 'bg-blue-600' : 'bg-blue-500'} text-white flex justify-between items-center cursor-pointer ${isOpen ? 'rounded-t-md' : 'rounded-md'}`}
                onClick={() => setIsOpen(!isOpen)}>
                {title}
                <span>{isOpen ? '▼' : '▶'}</span>
            </div>
            {isOpen && (
                <div className="p-4 bg-white rounded-b-md">
                    <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                                <th scope="col" className="py-3 px-6">Product Name</th>
                                <th scope="col" className="py-3 px-6">Quantity</th>
                                <th scope="col" className="py-3 px-6">Unit Price</th>
                                <th scope="col" className="py-3 px-6">Total Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {content.map(item => (
                                <tr key={item.Id} className="bg-white border-b">
                                    <td className="py-4 px-6">{item.ProductName}</td>
                                    <td className="py-4 px-6">{item.Quantity}</td>
                                    <td className="py-4 px-6">${formatNumber(item.UnitPrice)}</td>
                                    <td className="py-4 px-6">${formatNumber(item.TotalPrice)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

function Accordion({ title, details, quotes }) {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <div className={`rounded-md shadow mt-2 ${isOpen ? '' : 'shadow'}`}>
            <div className={`p-4 ${isOpen ? 'bg-blue-600' : 'bg-blue-500'} text-white cursor-pointer flex justify-between items-center ${isOpen ? 'rounded-t-md' : 'rounded-md'}`}
                 onClick={() => setIsOpen(!isOpen)}>
                {title}
                <span>{isOpen ? '▼' : '▶'}</span>
            </div>
            {isOpen && (
                <div className="bg-gray-200 p-4 rounded-b-md">
                    <p><strong>Status:</strong> {details.Status}, <strong>Close Date:</strong> {details.CloseDate}</p>
                    {quotes.map(quote => (
                        <SubAccordion key={quote.Id} title={`${quote.Name} - Total: $${formatNumber(quote.Total)}`} content={quote.QuoteLineItems} />
                    ))}
                </div>
            )}
        </div>
    );
}

function Account({ account }) {
    return (
        <div className="mt-5">
            <h2 className="text-xl font-bold text-center">{account.Name}</h2>
            {account.Opportunities.map(opp => (
                <Accordion key={opp.Id} title={opp.Name} details={opp} quotes={opp.Quotes} />
            ))}
        </div>
    );
}

function App() {
    return (
        <div className="container mx-auto px-4 py-5">
            {data.Accounts.map(account => (
                <Account key={account.Id} account={account} />
            ))}
        </div>
    );
}

function formatNumber(number) {
    const rounded = Math.round(number * 100) / 100; // Ensuring the number has two decimal places
    return '$' + rounded.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}


ReactDOM.render(<App />, document.getElementById('root'));
