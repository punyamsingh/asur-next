import supabase from './db.js';

export default async function handler(req,res) {
  try {
    if (req.method === 'GET') {
      const { rollNo } = req.query;

      const { data,error } = await supabase
        .from('attendance_details')
        .select('subject_id, PorA, Date_marked')
        .eq('Roll_No',rollNo);

      if (error) {
        throw error;
      }

      if (data.length === 0) {
        // Return a response with 0% for each subject if no data is found
        const emptyResponse = [
          { "subject_id": "CCC708","Percentage": 0 },
          { "subject_id": "CSD101","Percentage": 0 },
          { "subject_id": "CSD102","Percentage": 0 },
          { "subject_id": "CSD311","Percentage": 0 },
          { "subject_id": "MAT376","Percentage": 0 },
          // Add more subjects as needed
        ];
        res.status(200).json(emptyResponse);
      } else {
        // Calculate the percentage
        const percentages = data.reduce((acc,curr) => {
          if (!acc[curr.subject_id]) {
            acc[curr.subject_id] = { present: 0,total: 0 };
          }
          if (curr.PorA === 'P') {
            acc[curr.subject_id].present += 1;
          }
          acc[curr.subject_id].total += 1;
          return acc;
        },{});

        const result = Object.keys(percentages).map(subject => ({
          subject_id: subject,
          Percentage: (percentages[subject].present / percentages[subject].total) * 100
        }));

        res.status(200).json(result);
      }
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data',details: error.message });
  } finally {
    res.end();
  }
};
