import { WORK_INFO } from '../model/workInfo.data'

export function WorkInfoTab() {
    return (
        <div>
            <h2 className="text-[28px] font-bold">{WORK_INFO.title}</h2>

            <div className="mt-6 flex flex-col gap-10">
                {WORK_INFO.sections.map((section) => (
                    <div key={section.title}>
                        <h3 className="text-lg font-bold">{section.title}</h3>
                        <ul className="mt-4 flex list-disc flex-col gap-3 pl-5 text-sm leading-7 font-light">
                            {section.items.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}
