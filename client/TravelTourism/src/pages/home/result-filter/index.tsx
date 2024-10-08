import { Key } from 'react';
import './index.css';
const SearchResult = ({ result, setSubmit, fieldName, setIsDropdownVisible, isDropdownVisible }) => {

    console.log(result, 'apiResult');
    const handleClick = (user: { code: string; city: string; }) => {
        setSubmit((prev) => ({
            ...prev,
            [fieldName]: `${user?.city}, ${user?.code}`,
            [`${fieldName}Code`]: user.code,
        }));
        setIsDropdownVisible(false);
    };
    console.log(result, 'resultmap');

    return (
        isDropdownVisible && result.length > 0 && (
            <div className='result-list'>
                {
                    result.map((user: { city: string; code: string; }, id: Key | null | undefined) => (
                        <div key={id} style={{ fontSize: "0.9rem", textAlign: "center" }} onClick={() => handleClick(user)}>
                            {`${user?.city}, ${user?.code}`}
                        </div>
                    ))
                }
            </div>
        )
    )
}

export default SearchResult;