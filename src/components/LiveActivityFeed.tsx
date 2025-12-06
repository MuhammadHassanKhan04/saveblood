import { Card } from "@/components/ui/card";
import { Droplet, HeartPulse, Clock } from "lucide-react";
import { useGlobalData } from "@/contexts/DataContext";
import { useLanguage } from "@/contexts/LanguageContext";

const LiveActivityFeed = () => {
  const { donors, requests } = useGlobalData();
  const { t } = useLanguage();

  // Get latest 5 donors and requests
  const latestDonors = [...donors].sort((a, b) => {
    const aTime = a.created_at ? new Date(a.created_at).getTime() : 0;
    const bTime = b.created_at ? new Date(b.created_at).getTime() : 0;
    return bTime - aTime;
  }).slice(0, 5);

  const latestRequests = [...requests].sort((a, b) => {
    const aTime = a.created_at ? new Date(a.created_at).getTime() : 0;
    const bTime = b.created_at ? new Date(b.created_at).getTime() : 0;
    return bTime - aTime;
  }).slice(0, 5);

  const getTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (seconds < 60) return "Just now";
    if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
    if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
    return `${Math.floor(seconds / 86400)}d ago`;
  };

  return (
    <div className="fixed bottom-4 right-4 w-80 max-h-[500px] overflow-hidden z-40 animate-slide-up">
      <Card className="shadow-card-hover border-2 border-primary/50 overflow-hidden bg-card/95 backdrop-blur-sm">
        <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-4">
          <h3 className="font-semibold flex items-center gap-2">
            <Clock className="h-5 w-5 animate-pulse" />
            Live Activity Feed
          </h3>
          <p className="text-xs opacity-90 mt-1 flex items-center gap-2">
            <span className="inline-flex items-center gap-1">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              {donors.length} donors
            </span>
            •
            <span>{requests.length} requests</span>
          </p>
        </div>

        <div className="overflow-y-auto max-h-[400px]">
          {/* Latest Donors */}
          {latestDonors.length > 0 && (
            <div className="p-4 border-b border-border">
              <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                <Droplet className="h-4 w-4 text-primary" />
                Latest Donors
              </h4>
              <div className="space-y-2">
                {latestDonors.map((donor) => (
                  <div key={donor.id} className="flex items-start gap-2 text-xs">
                    <div className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-full flex-shrink-0">
                      <span className="text-xs font-bold text-primary">
                        {donor.blood_group}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-foreground truncate">
                        {donor.name}
                      </p>
                      <p className="text-muted-foreground truncate">
                        {donor.city}, {donor.country}
                      </p>
                      {donor.created_at && (
                        <p className="text-muted-foreground">
                          {getTimeAgo(donor.created_at)}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Latest Requests */}
          {latestRequests.length > 0 && (
            <div className="p-4">
              <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                <HeartPulse className="h-4 w-4 text-primary" />
                Latest Requests
              </h4>
              <div className="space-y-2">
                {latestRequests.map((request) => (
                  <div key={request.id} className="flex items-start gap-2 text-xs">
                    <div className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-full flex-shrink-0">
                      <span className="text-xs font-bold text-primary">
                        {request.blood_group}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-foreground truncate">
                        {request.name}
                      </p>
                      <p className="text-muted-foreground truncate">
                        {request.city}, {request.country}
                      </p>
                      {request.created_at && (
                        <p className="text-muted-foreground">
                          {getTimeAgo(request.created_at)}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default LiveActivityFeed;
