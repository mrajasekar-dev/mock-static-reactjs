function SubAccordion({ title, content }) {
    const [isOpen, setIsOpen] = React.useState(false);
    const [modalContent, setModalContent] = React.useState(null);

    const openModal = (item) => {
        setModalContent(item);
        document.getElementById('modal').classList.add('show');
    };

    const closeModal = () => {
        setModalContent(null);
        document.getElementById('modal').classList.remove('show');
    };

    return (
        <div className={`rounded-md shadow-sm mt-4`}>
            <div className={`p-4 ${isOpen ? 'bg-blue-600' : 'bg-blue-500'} text-white flex justify-between items-center cursor-pointer rounded-md`}
                onClick={() => setIsOpen(!isOpen)}>
                {title}
                <span>{isOpen ? '▼' : '▶'}</span>
            </div>
            {isOpen && (
                <div className="p-4 bg-white rounded-b-md">
                    <div className="md:hidden">
                        {content.map(item => (
                            <div key={item.Id} className="bg-gray-100 p-4 rounded-md mb-2">
                                <h3 className="font-bold">{item.ProductName}</h3>
                                <p>Quantity: {item.Quantity}</p>
                                <p>Unit Price: $ {formatNumber(item.UnitPrice)}</p>
                                <p>Total Price: $ {formatNumber(item.TotalPrice)}</p>
                                <button onClick={() => openModal(item)} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">View Details</button>
                            </div>
                        ))}
                    </div>
                    <div className="hidden md:block">
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
                                        <td className="py-4 px-6">$ {formatNumber(item.UnitPrice)}</td>
                                        <td className="py-4 px-6">$ {formatNumber(item.TotalPrice)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
            {/* Modal */}
            {modalContent && (
                <div id="modal" className="modal">
                    <div className="modal-content">
                        <h2 className="font-bold">{modalContent.ProductName}</h2>
                        <p>Quantity: {modalContent.Quantity}</p>
                        <p>Unit Price: $ {formatNumber(modalContent.UnitPrice)}</p>
                        <p>Total Price: $ {formatNumber(modalContent.TotalPrice)}</p>
                        <button onClick={closeModal} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Close</button>
                    </div>
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
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <strong>Status:</strong> {details.Status}
                        </div>
                        <div>
                            <strong>{details.Status === "Open" ? "Created Date:" : "Closed Date:"}</strong> {details.Status === "Open" ? details.CreatedDate : details.ClosedDate}
                        </div>
                    </div>
                    {quotes.map(quote => (
                        <SubAccordion key={quote.Id} title={`${quote.Name} - Total: $ ${formatNumber(quote.Total)}`} content={quote.QuoteLineItems} />
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
        <div className="max-w-2xl mx-auto px-4 py-5">
            {data.Accounts.map(account => (
                <Account key={account.Id} account={account} />
            ))}
        </div>
    );
}

function formatNumber(number) {
    const rounded = Math.round(number * 100) / 100; // Ensuring the number has two decimal places
    return rounded.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}


ReactDOM.render(<App />, document.getElementById('root'));
