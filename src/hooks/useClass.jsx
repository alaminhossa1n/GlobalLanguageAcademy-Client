import { useQuery } from "@tanstack/react-query";

const useClass = () => {

    const { data: allClass = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['class'],
        queryFn: async () => {
            const res = await fetch('https://global-language-academy-server.vercel.app/class')
            return res.json()
        }
    })
    return [allClass, refetch, loading]
}

export default useClass;