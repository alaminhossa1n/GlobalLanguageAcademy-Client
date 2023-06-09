import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useMyClass = ()=>{
    const { user, loading } = useAuth();

    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: myClass = [] } = useQuery({
        queryKey: ['myClass', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/my-class?email=${user?.email}`)
            // console.log('res from axios', res)
            return res.data;
        },
    })

    return [myClass, refetch]
}

export default useMyClass