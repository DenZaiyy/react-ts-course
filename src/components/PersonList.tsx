type PersonsListProps = {
    names: {
        first: string;
        last: string;
    }[];
};

export const PersonList = (props: PersonsListProps) => {
    return (
        <div>
            {props.names.map((person) => {
                return (
                    <h2 key={person.first}>
                        {person.first} {person.last}
                    </h2>
                );
            })}
        </div>
    );
};
