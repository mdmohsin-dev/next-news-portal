import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../ui/select'

interface CategoryChangeProps {
    onCategoryFilter: (category: string) => void
}

const CategoryFilter = ({ onCategoryFilter }: CategoryChangeProps) => {

    const categories = ['all', 'tech', 'health', 'business', 'sports']

    return (
        <div className='w-1/4'>
            <h3 className='text-3xl font-bold'>Filter by category</h3>
            <div>
                <Select onValueChange={(value) => onCategoryFilter(value)}>
                    <SelectTrigger className="w-full mt-3 capitalize">
                        <SelectValue placeholder="Select Category" />
                    </SelectTrigger>
                    <SelectContent>
                        {categories.map((category) => (
                            <SelectItem
                                key={category}
                                className='capitalize'
                                value={category}>{category}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
        </div>
    )
}

export default CategoryFilter