

const SectionHeader = ({children}) => {
    return (
        <h1 className='text-5xl font-bold text-primary my-8 text-center'>
            {
                children
            }
        </h1>
    );
};

export default SectionHeader;