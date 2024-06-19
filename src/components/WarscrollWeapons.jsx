import './WarscrollWeapons.css'

function WarscrollWeapons({ unit, color }) {
    return <div className="warscroll-weapons" >
        {unit.rangedWeapons &&
            <table className="fl-table" >
                <thead>
                    <tr>
                        <th className="weapon-left">Ranged Weapons</th>
                        <th className="weapon-center">Rng</th>
                        <th className="weapon-center">Atk</th>
                        <th className="weapon-center">Hit</th>
                        <th className="weapon-center">Wnd</th>
                        <th className="weapon-center">Rnd</th>
                        <th className="weapon-center">Dmg</th>
                        <th className="weapon-center">Ability</th>
                    </tr>
                </thead>
                <tbody>
                    {unit.rangedWeapons.map((weapon, i) => (
                        <tr key={i}>
                            <td className="weapon-left">{weapon.name}</td>
                            <td className="weapon-center">{weapon.rng}</td>
                            <td className="weapon-center">{weapon.atk}</td>
                            <td className="weapon-center">{weapon.hit}</td>
                            <td className="weapon-center">{weapon.wnd}</td>
                            <td className="weapon-center">{weapon.rnd}</td>
                            <td className="weapon-center">{weapon.dmg}</td>
                            <td className="weapon-center">{weapon.abilities ? weapon.abilities.join(", ") : " - "}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        }

        {unit.meleeWeapons &&
            <table className="fl-table">
                <thead>
                    <tr>
                        <th className="weapon-left">Melee Weapons</th>
                        <th className="weapon-center">Atk</th>
                        <th className="weapon-center">Hit</th>
                        <th className="weapon-center">Wnd</th>
                        <th className="weapon-center">Rnd</th>
                        <th className="weapon-center">Dmg</th>
                        <th className="weapon-center">Ability</th>
                    </tr>
                </thead>
                <tbody>
                    {unit.meleeWeapons.map((weapon, i) => (
                        <tr key={i}>
                            <td className="weapon-left">{weapon.name}</td>
                            <td className="weapon-center">{weapon.atk}</td>
                            <td className="weapon-center">{weapon.hit}</td>
                            <td className="weapon-center">{weapon.wnd}</td>
                            <td className="weapon-center">{weapon.rnd}</td>
                            <td className="weapon-center">{weapon.dmg}</td>
                            <td className="weapon-center">{weapon.abilities ? weapon.abilities.join(", ") : " - "}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        }
    </div >
}

export default WarscrollWeapons;