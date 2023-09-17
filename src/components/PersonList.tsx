import { Name } from "./Person.types";

type PersonsListProps = {
    names: Name[];
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
