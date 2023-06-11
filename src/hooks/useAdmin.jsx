import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

// const useAdmin = () => {
//     const { user } = useAuth();
//     const [axiosSecure] = useAxiosSecure();
//     const { data: role, isLoading: isRoleLoading } = useQuery({
//         queryKey: ['role', user?.email],
//         queryFn: async () => {
//             const res = await axiosSecure.get(`/users/role/${user?.email}`);
//             // console.log('is admin response', res)
//             return res.data.role;
//         }
//     })
//     return [role, isRoleLoading]
// }

const useAdmin = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: role, isLoading: isRoleLoading } = useQuery({
        queryKey: ['role', user?.email],
        queryFn: async () => {
            if (user?.email) {
                const res = await axiosSecure.get(`/users/role/${user.email}`);
                return res.data.role;
            }
            return null; // Return a default value if user.email is null or undefined
        },
        enabled: !!user?.email, // Enable the query only if user.email is truthy
    });
    return [role, isRoleLoading];
};

export default useAdmin;