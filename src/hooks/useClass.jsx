import { useQuery } from "@tanstack/react-query";

// const useClass = () => {

//     const { data: allClass = [], isLoading: loading, refetch } = useQuery({
//         queryKey: ['class'],
//         queryFn: async () => {
//             const res = await fetch('https://global-language-academy-server.vercel.app/class')
//             return res.json()
//         }
//     })
//     return [allClass, refetch, loading]
// }

const useClass = () => {
    const { data: classes = {}, isLoading: loading, refetch } = useQuery({
        queryKey: ['class'],
        queryFn: async () => {
            const res = await fetch('https://global-language-academy-server.vercel.app/class');
            return res.json();
        },
    });

    const approvedClasses = classes.approvedClasses || [];
    const allClasses = classes.allClasses || [];

    return [allClasses, approvedClasses, refetch, loading];
};


export default useClass;