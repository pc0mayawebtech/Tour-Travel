import './index.css';

const SearchResult = ({ result, setSubmit, fieldName }) => {
    const handleClick = (value: string) => {
        setSubmit((prev) => ({ ...prev, [fieldName]: value }));
    };
    return (
        <div className='result-list'>
            {
                result.map((user: string, id: string) => {
                    return (
                        <div key={id} onClick={() => handleClick(`${user.city}, ${user.code}`)}>{`${user.city}, ${user.code}`}</div>
                    )
                })
            }
        </div>
    )
}

export default SearchResult;