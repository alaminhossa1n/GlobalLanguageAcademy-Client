import { useQuery } from "@tanstack/react-query";

const useClass = () => {

    const { data: allClass = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['class'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/class')
            return res.json()
        }
    })
    return [allClass, loading, refetch]
}

export default useClass;