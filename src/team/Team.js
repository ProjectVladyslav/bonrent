import teamData from "./teamData.json";
import TeamComp from "../body/TeamComp"
function Team() {
    return (
        <>

            <div className="container mx-auto mt-[120px]">
                <h1 className="text-center text-5xl uppercase text-[#04162E] font-bold">BonBike TEAM</h1>
                <div className="flex flex-col md:flex-row mt-10 space-y-10 md:space-y-0">

                    {teamData.map((team, index) => (
                        <TeamComp
                            key={index}
                            indkey={team.id}
                            name={team.name}
                            image={team.image}
                            position={team.position}
                            facebook={team.facebook_url}
                            instagram={team.instagram_url}
                            twitter={team.twitter_url}
                        />
                    ))}
                </div>
            </div>

        </>
    );
}

export default Team;
