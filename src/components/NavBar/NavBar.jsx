/* eslint-disable no-console */
import { useDispatch, useSelector } from 'react-redux';
import { SearchBar, StyledTextField } from './styled';
import actions from '../../store/services/tests/actions';

function NavBar() {
  const { filter } = useSelector((state) => state.testsReduser);
  const dispatch = useDispatch();

  const handleChangeFilter = (e) => {
    console.log(e.target.value);
    dispatch(actions.filterAction(e.target.value));
  };

  return (
    <SearchBar>
      <StyledTextField
        placeholder='Filter tests'
        label="Search"
        variant="outlined"
        value={filter}
        onChange={handleChangeFilter}
      />
    </SearchBar>
  );
}

export default NavBar;
