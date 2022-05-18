<template>
    <div class="sqlformatter">
        <div>{{this.query}}</div>
        <textarea id="test"></textarea>
        <div id="test2"></div>
    </div>
</template>

<script>
    import {format} from "sql-formatter";
    import {highlight} from "sql-highlight";
    export default {
        name: 'Sql-formatter',
        data() {
            return {
               query: "",
                query2: ""
            }
    },
        mounted() {

            this.query = format('SELECT\n' +
                '  e.employee_id AS "Employee #"\n' +
                '  , e.first_name || \' \' || e.last_name AS "Name"\n' +
                '  , e.email AS "Email"\n' +
                '  , e.phone_number AS "Phone"\n' +
                '  , TO_CHAR(e.hire_date, \'MM/DD/YYYY\') AS "Hire Date"\n' +
                '  , TO_CHAR(e.salary, \'L99G999D99\', \'NLS_NUMERIC_CHARACTERS = \'\'.,\'\' NLS_CURRENCY = \'\'$\'\'\') AS "Salary"\n' +
                '  , e.commission_pct AS "Comission %"\n' +
                '  , \'works as \' || j.job_title || \' in \' || d.department_name || \' department (manager: \'\n' +
                '    || dm.first_name || \' \' || dm.last_name || \') and immediate supervisor: \' || m.first_name || \' \' || m.last_name AS "Current Job"\n' +
                '  , TO_CHAR(j.min_salary, \'L99G999D99\', \'NLS_NUMERIC_CHARACTERS = \'\'.,\'\' NLS_CURRENCY = \'\'$\'\'\') || \' - \' ||\n' +
                '      TO_CHAR(j.max_salary, \'L99G999D99\', \'NLS_NUMERIC_CHARACTERS = \'\'.,\'\' NLS_CURRENCY = \'\'$\'\'\') AS "Current Salary"\n' +
                '  , l.street_address || \', \' || l.postal_code || \', \' || l.city || \', \' || l.state_province || \', \'\n' +
                '    || c.country_name || \' (\' || r.region_name || \')\' AS "Location"\n' +
                '  , jh.job_id AS "History Job ID"\n' +
                '  , \'worked from \' || TO_CHAR(jh.start_date, \'MM/DD/YYYY\') || \' to \' || TO_CHAR(jh.end_date, \'MM/DD/YYYY\') ||\n' +
                '    \' as \' || jj.job_title || \' in \' || dd.department_name || \' department\' AS "History Job Title"\n' +
                '  \n' +
                'FROM employees e\n' +
                '-- to get title of current job_id\n' +
                '  JOIN jobs j \n' +
                '    ON e.job_id = j.job_id\n' +
                '-- to get name of current manager_id\n' +
                '  LEFT JOIN employees m \n' +
                '    ON e.manager_id = m.employee_id\n' +
                '-- to get name of current department_id\n' +
                '  LEFT JOIN departments d \n' +
                '    ON d.department_id = e.department_id\n' +
                '-- to get name of manager of current department\n' +
                '-- (not equal to current manager and can be equal to the employee itself)\n' +
                '  LEFT JOIN employees dm \n' +
                '    ON d.manager_id = dm.employee_id\n' +
                '-- to get name of location\n' +
                '  LEFT JOIN locations l\n' +
                '    ON d.location_id = l.location_id\n' +
                '  LEFT JOIN countries c\n' +
                '    ON l.country_id = c.country_id\n' +
                '  LEFT JOIN regions r\n' +
                '    ON c.region_id = r.region_id\n' +
                '-- to get job history of employee\n' +
                '  LEFT JOIN job_history jh\n' +
                '    ON e.employee_id = jh.employee_id\n' +
                '-- to get title of job history job_id\n' +
                '  LEFT JOIN jobs jj\n' +
                '    ON jj.job_id = jh.job_id\n' +
                '-- to get namee of department from job history\n' +
                '  LEFT JOIN departments dd\n' +
                '    ON dd.department_id = jh.department_id\n' +
                '\n' +
                'ORDER BY e.employee_id;', {indentStyle: "tabularLeft", logicalOperatorNewline: "after", keywordCase: "upper", multilineLists: "avoid"})
            this.query2 = highlight( 'SELECT\n' +
                '  e.employee_id AS "Employee #"\n' +
                '  , e.first_name || \' \' || e.last_name AS "Name"\n' +
                '  , e.email AS "Email"\n' +
                '  , e.phone_number AS "Phone"\n' +
                '  , TO_CHAR(e.hire_date, \'MM/DD/YYYY\') AS "Hire Date"\n' +
                '  , TO_CHAR(e.salary, \'L99G999D99\', \'NLS_NUMERIC_CHARACTERS = \'\'.,\'\' NLS_CURRENCY = \'\'$\'\'\') AS "Salary"\n' +
                '  , e.commission_pct AS "Comission %"\n' +
                '  , \'works as \' || j.job_title || \' in \' || d.department_name || \' department (manager: \'\n' +
                '    || dm.first_name || \' \' || dm.last_name || \') and immediate supervisor: \' || m.first_name || \' \' || m.last_name AS "Current Job"\n' +
                '  , TO_CHAR(j.min_salary, \'L99G999D99\', \'NLS_NUMERIC_CHARACTERS = \'\'.,\'\' NLS_CURRENCY = \'\'$\'\'\') || \' - \' ||\n' +
                '      TO_CHAR(j.max_salary, \'L99G999D99\', \'NLS_NUMERIC_CHARACTERS = \'\'.,\'\' NLS_CURRENCY = \'\'$\'\'\') AS "Current Salary"\n' +
                '  , l.street_address || \', \' || l.postal_code || \', \' || l.city || \', \' || l.state_province || \', \'\n' +
                '    || c.country_name || \' (\' || r.region_name || \')\' AS "Location"\n' +
                '  , jh.job_id AS "History Job ID"\n' +
                '  , \'worked from \' || TO_CHAR(jh.start_date, \'MM/DD/YYYY\') || \' to \' || TO_CHAR(jh.end_date, \'MM/DD/YYYY\') ||\n' +
                '    \' as \' || jj.job_title || \' in \' || dd.department_name || \' department\' AS "History Job Title"\n' +
                '  \n' +
                'FROM employees e\n' +
                '-- to get title of current job_id\n' +
                '  JOIN jobs j \n' +
                '    ON e.job_id = j.job_id\n' +
                '-- to get name of current manager_id\n' +
                '  LEFT JOIN employees m \n' +
                '    ON e.manager_id = m.employee_id\n' +
                '-- to get name of current department_id\n' +
                '  LEFT JOIN departments d \n' +
                '    ON d.department_id = e.department_id\n' +
                '-- to get name of manager of current department\n' +
                '-- (not equal to current manager and can be equal to the employee itself)\n' +
                '  LEFT JOIN employees dm \n' +
                '    ON d.manager_id = dm.employee_id\n' +
                '-- to get name of location\n' +
                '  LEFT JOIN locations l\n' +
                '    ON d.location_id = l.location_id\n' +
                '  LEFT JOIN countries c\n' +
                '    ON l.country_id = c.country_id\n' +
                '  LEFT JOIN regions r\n' +
                '    ON c.region_id = r.region_id\n' +
                '-- to get job history of employee\n' +
                '  LEFT JOIN job_history jh\n' +
                '    ON e.employee_id = jh.employee_id\n' +
                '-- to get title of job history job_id\n' +
                '  LEFT JOIN jobs jj\n' +
                '    ON jj.job_id = jh.job_id\n' +
                '-- to get namee of department from job history\n' +
                '  LEFT JOIN departments dd\n' +
                '    ON dd.department_id = jh.department_id\n' +
                '\n' +
                'ORDER BY e.employee_id;', {html: true})
            //this.query = format(this.query2, {denseOperators: true})
            document.getElementById('test').innerHTML = this.query
            document.getElementById('test2').innerHTML = this.query2

        }};
</script>
<style>
#test {
    padding:1rem;
    width:100%;
    height:200px;
    color:white;
    background-color: black;
    resize: none;

}
#test2 {
    padding:1rem;
    width:100%;

    color:white;
    background-color: black;
    resize: none;
    font-family: monospace;
    line-height: 160%;
    font-size: 1rem;

}
code.sql {
    font-family: monospace;
    background-color: #000;
}

.sql-hl-keyword {
    color: #f000f0;
}
.sql-hl-function {
    color: #ff0000;
}
.sql-hl-number {
    color: #00ff00;
}
.sql-hl-string {
    color: #00ff00;
}
.sql-hl-special {
    color: #ffff00;
}
.sql-hl-bracket {
    color: #ffff00;
}
</style>