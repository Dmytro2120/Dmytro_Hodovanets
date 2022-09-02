import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getApiResource, changeHTTP } from '../../utils/network';
import { API_PEOPLE } from '../../constants/api';
import { getPeopleId, getPeopleImage, getPeoplePageId } from '../../servicer/getPeopleData';
import PeopleList from '../../components/PeoplePage/PeopleList';
import { useQueryParams } from '../../hooks/useQueryParams';
import PeopleNav from '../../components/PeoplePage/PeopleNav/PeopleNav';

import styles from './PeoplePage.module.css';

const PeoplePage = ({ setErrorApi }) => {
    const [people, setPeople] = useState(null);
    const [prevPage, setPrevPage] = useState(null);
    const [nextPage, setNextPage] = useState(null);
    const [counterPage, setCounterPage] = useState(1);
    

    const query = useQueryParams();
    const queryPage = query.get('page');

    

    const getResource = async (url) => {
        const res = await getApiResource(url);


        if (res) {
            const peopleList = res.results.map(({ name, url }) => {
                const id = getPeopleId(url);
                const img = getPeopleImage(id);
    
                return {
                    id,
                    name,
                    img
                }
            })
            
            setPeople(peopleList);
            setPrevPage(changeHTTP(res.previous));
            setNextPage(changeHTTP(res.next));
            setCounterPage(getPeoplePageId(url));
            setErrorApi(false);
        } else {
            setErrorApi(true);
        }
    }

    useEffect(() => {
       getResource(API_PEOPLE+queryPage);
    }, []);

    return (
        <>
            <PeopleNav 
                getResource={getResource}
                prevPage={prevPage}
                nextPage={nextPage}
                counterPage={counterPage}
            />
            {people && <PeopleList people={people} />}
        </>
    )
}


PeoplePage.propTypes = {
    setErrorApi: PropTypes.func

}


export default (PeoplePage);