import { useState, useEffect } from 'react';
import PokeList from './component/PokeList';
import './App.css';
import axios from 'axios';
// eslint-disable-next-line no-unused-vars
import PokeDetail from './component/PokeDetail';
function App() {
    const [pokemonList, setPokemonList] = useState([]);
    // eslint-disable-next-line no-unused-vars
    const [selectedPokemonName, setSelectedPokemonName] = useState('');
    const [pokemonDetail, setPokemonDetail] = useState('');
    const clear = () => {
        setSelectedPokemonName('');
        setPokemonDetail('');
    };
    useEffect(() => {
        try {
            axios.get('https://pokeapi.co/api/v2/pokemon?limit=10').then((response) => {
                setPokemonList(response.data.results);
                console.log(response.data.results);
            });
        } catch (error) {
            const { response } = error;
            const errorObject = {
                status: response.status,
                statusText: response.statusText,
                url: response.config.url,
            };
            console.log(`Error: ${errorObject.status} ${errorObject.statusText} - ${errorObject.url}`);
        }
    }, []);

    useEffect(() => {
        if (!selectedPokemonName) return;
        try {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${selectedPokemonName}`).then((response) => {
                setPokemonDetail(response.data);
            });
        } catch (error) {
            const { response } = error;
            const errorObject = {
                status: response.status,
                statusText: response.statusText,
                url: response.config.url,
            };
            console.log(`Error: ${errorObject.status} ${errorObject.statusText} - ${errorObject.url}`);
        }
    }, [selectedPokemonName]);

    return (
        <div style={styles.container}>
            <h2>PokeAPI</h2>
            <br>
            </br>
            <PokeList pokemonList={pokemonList} setSelectedPokemonName={setSelectedPokemonName} />
            {/* Menampilan detail Pokemon jika ada*/}
            {pokemonDetail && (
                <div style={styles.detail}>
                    <h2>Pokemon Detail</h2>
                    <br>
                    </br>
                    <PokeDetail pokemonDetail={pokemonDetail} />
                    <button style={styles.button} onClick={() => clear()}>
                        Clear
                    </button>
                </div>
            )}
        </div>
    );
}
const styles = {
    container: {
        width: '50%',
        margin: '10',
        padding: '80px',
        textAlign: 'center',
        
    },
    // Tambahkan style untuk clear button
    button: {
        backgroundColor: '#f44336',
        color: '#fff',
        borderRadius: '6px',
        padding: '12px 24px',
        fontSize: '1em',
        cursor: 'pointer',
        marginTop: '32px',
    },
    detail: {
        marginTop: '52px',
        padding: '150px',
        border: '3px solid #ccc',
        borderRadius: '3px',
        marginBottom: '10px',
        marginLeft: '',
    },
};

export default App;
