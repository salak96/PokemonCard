/* eslint-disable react/prop-types */

function PokeList({ pokemonList, setSelectedPokemonName }) {
    return (
        <>
            <div style={style.gridContent}>
                {pokemonList.map((item) => (
                    // Tambahkan onClick event ke dalam div
                    <div style={style.card} key={item.name} onClick={() => setSelectedPokemonName(item.name)}>
                        {item.name}
                    </div>
                ))}
            </div>
        </>
    );
}
const style = {
    gridContent: {
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gap: 16,
    },
    card: {
        padding: '16px 8px',
        backgroundColor: '#16f796',
        borderRadius: '8px',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        color: 'black',
    },
};

export default PokeList;
