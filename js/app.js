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
                    <ul>
                        {content.map(item => (
                            <li key={item.Id} className="py-1">
                                {`${item.ProductName} - Quantity: ${item.Quantity}, Unit Price: $${item.UnitPrice.toLocaleString()}, Total Price: $${item.TotalPrice.toLocaleString()}`}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

function Accordion({ title, quotes }) {
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
                    {quotes.map(quote => (
                        <SubAccordion key={quote.Id} title={quote.Name} content={quote.QuoteLineItems} />
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
                <Accordion key={opp.Id} title={opp.Name} quotes={opp.Quotes} />
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

ReactDOM.render(<App />, document.getElementById('root'));
