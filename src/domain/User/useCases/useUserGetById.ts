import { QueryKeys } from '@infra'
import { useQuery } from '@tanstack/react-query'

import { userService } from '../userService'

export function useUserGetById(id: number) {
  const { data, isLoading, isError } = useQuery({
    queryKey: [QueryKeys.UserGetById, id],
    queryFn: () => userService.getUserById(id),
    staleTime: 1000 * 30, //30 seconds to refetch
    // cacheTime: 5000
  })

  // const [user, setUser] = useState<User>()
  // const [isError, setIsError] = useState<boolean | null>(null)
  // const [isLoading, setIsLoading] = useState(false)

  // const getUserById = useCallback(async () => {
  //   try {
  //     setIsLoading(true)
  //     const _user = await userService.getUserById(id)
  //     setUser(_user)
  //   } catch (err) {
  //     setIsError(true)
  //   } finally {
  //     setIsLoading(false)
  //   }
  // }, [id])

  // useEffect(() => {
  //   getUserById()
  // }, [getUserById])

  return {
    user: data,
    isError,
    isLoading,
  }
}
