export const ErrorMessage = ({children}: {children: React.ReactNode}) => {
    return (
      <div className="text-start text-red-600 font-medium p-3 uppercase text-sm">
          {children}
      </div>
    )
  }