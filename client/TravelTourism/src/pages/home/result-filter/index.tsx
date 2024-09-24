import './index.css';
const SearchResult = ({ result, setSubmit, fieldName }) => {

    console.log(result, 'apiResult');
    const handleClick = (user: { code: string; city: string; }) => {
        setSubmit((prev) => ({
            ...prev,
            [fieldName]: `${user?.city}, ${user?.code}`,
            [`${fieldName}Code`]: user.code,
        }));
    };

    return (
        <div className='result-list'>
            {
                result.map((user, id) => (
                    <div key={id} style={{ fontSize: "0.9rem", textAlign: "center" }} onClick={() => handleClick(user)}>
                        {`${user?.city}, ${user?.code}`}
                    </div>
                ))
            }
        </div>
    )
}

export default SearchResult;