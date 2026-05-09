import { Input } from '../ui/input'

interface SearchBarProps {
    onSearch: (searchTerm: string) => void
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
    return (
        <div className='w-2/4'>
            <h3 className='text-3xl font-bold'>Search News</h3>
            <Input
                className='mt-3'
                type="text"
                placeholder="Search news"
                onChange={(e) => onSearch(e.target.value)} />
        </div>
    )
}

export default SearchBar