type Text2 = {
  bg: string,
  border: string,
  text: string
}


type Text1 = {
  title: string,
  subTitle: string,
  status: Text2
}

export const AlertMessage = ({title, subTitle, status}: Text1) => {
  return (
    <div className={`${status.bg} border-t-4 ${status.border} rounded-b text-white px-4 py-3 mt-10 shadow-md w-full`} role="alert">
      <div className="flex">
        <div className="py-1"><svg className={`fill-current h-6 w-6 ${status.text} mr-4`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
        <div>
                  <p className="font-bold">{title}</p>
                  <p className="text-sm">{subTitle}</p>
        </div>
      </div>
    </div>
  )
}
