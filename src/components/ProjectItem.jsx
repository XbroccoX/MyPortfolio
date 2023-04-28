
export const ProjectItem = ({ img, title, url, urlGithub, tags, description }) => {
    return (
        <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-gray-950" >
            <img src={img} alt={title} className="rounded-xl group-hover:opacity-10" />
            <div className=" group-hover:flex-col hidden group-hover:flex absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <div>
                    <h3 className="text-2xl font-bold text-white tracking-wider text-center">
                        {title}
                    </h3>
                    <p className="text-md font-light mt-4">{description}</p>
                    <div class="flex gap-2 flex-wrap mt-6 text-[.7rem]">
                        {
                            tags.map(tag => (
                                <span class="bg-violet-700 rounded-full px-2 py-1 text-white cursor-default">{tag}</span>

                            ))
                        }
                    </div>
                </div>
                <div class="flex justify-around mt-3">
                    {
                        url && (
                            <a href={url} target="_blank" rel="noreferrer" class="text-sm font-semibold flex flex-row flex-nowrap gap-2 hover:border-b-2  p-2 ">
                                Visit web
                            </a>
                        )
                    }
                    {
                        urlGithub && (
                            <a href={urlGithub} target="_blank" rel="noreferrer" class="text-sm font-semibold flex flex-row flex-nowrap gap-2 hover:border-b-2  p-2 ">
                                Visit repo
                            </a>
                        )

                    }
                </div>
            </div>
        </div>
    )
}
