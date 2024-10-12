function SubAccordion({ title, content }) {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <div className="sub-accordion">
            <div className="sub-accordion-header" onClick={() => setIsOpen(!isOpen)}>{title}</div>
            <div className={isOpen ? 'sub-accordion-content show' : 'sub-accordion-content'}>
                <ul>
                    {content.map(item => (
                        <li key={item.Id}>{`${item.ProductName} - Quantity: ${item.Quantity}, Unit Price: $${item.UnitPrice}, Total Price: $${item.TotalPrice}`}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

function Accordion({ title, quotes }) {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <div className="accordion">
            <div className="accordion-header" onClick={() => setIsOpen(!isOpen)}>{title}</div>
            <div className={isOpen ? 'accordion-content show' : 'accordion-content'}>
                {quotes.map(quote => (
                    <SubAccordion key={quote.Id} title={quote.Name} content={quote.QuoteLineItems} />
                ))}
            </div>
        </div>
    );
}

function Account({ account }) {
    return (
        <div>
            <h2>{account.Name}</h2>
            {account.Opportunities.map(opp => (
                <Accordion key={opp.Id} title={opp.Name} quotes={opp.Quotes} />
            ))}
        </div>
    );
}

function App() {
    return (
        <div className="container">
            {data.Accounts.map(account => (
                <Account key={account.Id} account={account} />
            ))}
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
