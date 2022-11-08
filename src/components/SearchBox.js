import { Button, Form, InputGroup } from "react-bootstrap";

const SearchBox = ({ userName, handleUserNameChange, handleSearchUserName }) => {
    return (
        <InputGroup className="mb-3">
            <Form.Control
                placeholder="Github Username"
                value={userName}
                onChange={(e) => handleUserNameChange(e)}
            />
            <Button variant="outline-secondary"
                onClick={handleSearchUserName}>
                Search
            </Button>
        </InputGroup >
    )
}

export default SearchBox;