import Image from "next/image";

const FeedbackCard = ({name, role, comment, pp, position}: any) => {
    return (
        <div className={`absolute z-10 ${position}  flex items-center py-2 pl-3 pr-9 rounded-full backdrop-blur-lg bg-gradient-to-r from-[#6d84f8] to-[#d4d9f3]`}>
            <Image src={`/avatars/${pp}`} alt="pp" width={55} height={55} className="rounded-full mr-4" />
            <div className="font-urbanis">
                <p className="font-bold">{name}</p>
                <p className="text-sm font-semibold text-opacity-75">{role}</p>
                <p className="font-bold text-sm">"{comment}"</p>
            </div>
        </div>
    );
};

export default FeedbackCard;