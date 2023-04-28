import genericImage from '../assets/projects/Construction.svg'

export const ProjectItem = ({ img, title, url, urlGithub, tags, description }) => {
    return (
        <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-gray-950" >
            {
                img
                    ? (

                        <img src={img} alt={title} className="rounded-xl group-hover:opacity-10" />
                    )
                    : (
                        <img src={genericImage} alt={title} className="rounded-xl group-hover:opacity-10 w-1/2" />
                    )

            }
            <div className=" group-hover:flex-col hidden group-hover:flex absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <div>
                    <h3 className="md:text-2xl text-xs font-bold text-white tracking-wider text-center">
                        {title}
                    </h3>
                    <p className="md:text-md text-xs font-light md:mt-4">{description}</p>
                    <div class="hidden md:flex md:gap-2  gap-1 flex-wrap md:mt-6 text-[.7rem]">
                        {
                            tags.map(tag => (
                                <span class="bg-violet-700 rounded-full  px-1 md:px-2 md:py-1 text-white cursor-default">{tag}</span>

                            ))
                        }
                    </div>
                </div>
                <div class="flex justify-around md:mt-3 mt-1">
                    {
                        url && (
                            <a href={url} target="_blank" rel="noreferrer" class="text-xs  md:text-sm font-semibold flex flex-row flex-nowrap gap-1 md:gap-2 md:hover:border-b-2 md:bg-transparent bg-violet-700 md:rounded-none rounded-md   md:p-2 p-1">
                                Visit web
                            </a>
                        )
                    }
                    {
                        urlGithub && (
                            <a href={urlGithub} target="_blank" rel="noreferrer" class="text-xs  md:text-sm font-semibold flex flex-row flex-nowrap gap-1 md:gap-2 md:hover:border-b-2 md:bg-transparent bg-violet-700 md:rounded-none rounded-md   md:p-2 p-1">
                                Visit repo
                            </a>
                        )

                    }
                </div>
            </div>
        </div>
    )
}
