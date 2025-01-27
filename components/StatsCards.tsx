import { GetFormStats } from "@/actions/form";
import StatsCard from "@/components/StatsCard";

type StatsCardsProps = {
  formStats?: Awaited<ReturnType<typeof GetFormStats>>;
  loading: boolean;
};

function StatsCards({ formStats, loading }: StatsCardsProps) {
  return (
    <div className="grid gap-3 lg:gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <StatsCard
        title="Total Visits"
        helperText="All time form visits"
        className="border-blue-500"
        value={formStats?.visits}
        loading={loading}
      />
      <StatsCard
        title="Total Submissions"
        helperText="All time form submissions"
        className="border-yellow-500"
        value={formStats?.submissions}
        loading={loading}
      />
      <StatsCard
        title="Submission Rate"
        helperText="Visits that result in form submission"
        className="border-green-500"
        value={formStats?.submissionRate}
        loading={loading}
      />
      <StatsCard
        title="Bounce Rate"
        helperText="Visits that leave without interactions"
        className="border-red-500"
        value={formStats?.bounceRate}
        loading={loading}
      />
    </div>
  );
}

export default StatsCards;
