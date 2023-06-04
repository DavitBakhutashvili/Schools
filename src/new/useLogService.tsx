// import { ILogQuery, ILogsQuery } from './interfaces/log.interface'
// import { useMutation, useQuery } from '@apollo/client'

// import logsGql from '../gql/log/logs.gql'
// import createLogGql from '../gql/log/createLog.gql'
// import logByIdGql from '../gql/log/logById.gql'
// import updateLogGql from '../gql/log/updateLog.gql'

// type logType = {
//   page: number
//   limit: number
//   search_text: string
// }

// export const useLogsService = ({ page, limit, search_text }: logType): ILogsQuery => {
//   const {
//     data: { logs } = [],
//     error,
//     loading,
//     refetch,
//   } = useQuery(logsGql, {
//     variables: { filter: { page, limit, search_text } },
//     fetchPolicy: 'cache-first',
//   })

//   return {
//     data: logs || [],
//     error,
//     loading,
//     refetch,
//   }
// }

// export const useCreateLogService = () => {
//   const [mutation] = useMutation(createLogGql)

//   const createLogService = async (input: any, callback: () => void) => {
//     const {
//       data: { createLog },
//     } = await mutation({
//       variables: { input },
//     })
//     if (callback) {
//       callback()
//     }

//     return createLog
//   }

//   return [createLogService]
// }

// export const useLogByIdService = ({ id }: { id: string }): ILogQuery => {
//   const {
//     data: { logById } = [],
//     error,
//     loading,
//     refetch,
//   } = useQuery(logByIdGql, {
//     variables: { id },
//     fetchPolicy: 'cache-first',
//   })

//   return {
//     data: logById || {},
//     error,
//     loading,
//     refetch,
//   }
// }

// export const useUpdateLogService = () => {
//   const [mutation] = useMutation(updateLogGql)
//   const updateLogById = async (id: string, input: any): Promise<{ success: boolean }> => {
//     const {
//       data: { log },
//     } = await mutation({
//       variables: {
//         id,
//         input,
//       },
//     })
//     return log
//   }

//   return [updateLogById]
// }
