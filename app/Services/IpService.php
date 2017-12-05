<?php
namespace App\Services;

use App\Ip;

class IpService
{
    /**
     * Get ip_id if exists else insert new record to ips table
     * @param $ip
     * @return ip id.
     */
    public function getIpId($ip)
    {
        $ip_details = Ip::where('ip', '=', $ip)->first();
        if (!$ip_details) {
            $ip_data = new Ip;
            $ip_data->ip = $ip;
            $ip_data->save();
            $ip_id = $ip_data->id;
        } else {
            $ip_id = $ip_details->id;
        }
        return $ip_id;
    }

    /**
     * Get ip from id
     * @param $id
     * @return mixed
     */
    public function getIp($id)
    {
        $ip_details = Ip::find($id);
        return $ip_details->ip;
    }
}
