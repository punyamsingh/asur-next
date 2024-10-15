CREATE OR REPLACE FUNCTION public.get_attendance_details(roll_no integer) RETURNS TABLE (
        subject_id text,
        subject_name text,
        teachername text,
        classroom_id text,
        P_count integer,
        A_count integer,
        attendance_percent double precision
    ) AS $$ BEGIN RETURN QUERY
SELECT subject.subject_id,
    subject.subject_name,
    subject.teachername,
    subject.classroom_id,
    COUNT(
        CASE
            WHEN attendance_details.pora = 'P' THEN 1
            ELSE NULL
        END
    ) AS P_count,
    COUNT(
        CASE
            WHEN attendance_details.pora = 'A' THEN 1
            ELSE NULL
        END
    ) AS A_count,
    (
        COUNT(
            CASE
                WHEN attendance_details.pora = 'P' THEN 1
                ELSE NULL
            END
        ) / COUNT(*)
    ) * 100 AS attendance_percent
FROM subject
    JOIN attendance_details ON subject.subject_id = attendance_details.subject_id
WHERE attendance_details.roll_no = roll_no
GROUP BY subject.subject_id,
    subject.subject_name,
    subject.teachername,
    subject.classroom_id;
END;
$$ LANGUAGE plpgsql;